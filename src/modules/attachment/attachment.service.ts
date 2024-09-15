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

  private readonly containerName = 'your-container-name';

  constructor(
    @InjectRepository(Attachment)
    private attachmentRepository: Repository<Attachment>,
    private projectService: ProjectService,
    private configService: ConfigService,
  ) {
    // this.blobServiceClient = BlobServiceClient.fromConnectionString(
    //   this.configService.get<string>('AZURE_BLOB_CONNECTION_STRING'),
    // );
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
}
