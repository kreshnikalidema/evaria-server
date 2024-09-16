import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlobServiceClient } from '@azure/storage-blob';
import { ProjectService } from '@/modules/project/project.service';
import { Attachment } from './entities/attachment.entity';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@Injectable()
export class AttachmentService {
  private readonly blobServiceClient: BlobServiceClient;

  private readonly containerName = 'main-container';

  constructor(
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
    private projectService: ProjectService,
    private configService: ConfigService,
  ) {
    this.blobServiceClient = BlobServiceClient.fromConnectionString(
      this.configService.get<string>('AZURE_BLOB_CONNECTION_STRING'),
    );
  }

  async upload(
    projectId: number,
    fileBuffer: Buffer,
    fileName: string,
  ): Promise<Attachment> {
    const project = await this.projectService.findOne(projectId);

    const containerClient = this.blobServiceClient.getContainerClient(
      this.containerName,
    );

    const blockBlobClient = containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.uploadData(fileBuffer);

    const dto = new CreateAttachmentDto();

    dto.name = fileName;

    dto.size = fileBuffer.byteLength;

    dto.url = blockBlobClient.url;

    dto.project = project;

    return this.attachmentRepository.save(dto);
  }

  async delete(attachmentId: number): Promise<void> {
    const attachment = await this.attachmentRepository.findOneOrFail({
      where: { id: attachmentId },
    });

    const containerClient = this.blobServiceClient.getContainerClient(
      this.containerName,
    );

    const blockBlobClient = containerClient.getBlockBlobClient(attachment.name);

    if (await blockBlobClient.exists()) {
      await blockBlobClient.delete();
    }

    await this.attachmentRepository.delete(attachmentId);
  }
}
