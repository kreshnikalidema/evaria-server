import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Param,
  Delete,
  ParseIntPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';

@Controller('attachments')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Post(':projectId')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('projectId') projectId: number,
  ): Promise<CreateAttachmentDto> {
    const fileBuffer = file.buffer;

    const fileName = file.originalname;

    return this.attachmentService.upload(projectId, fileBuffer, fileName);
  }

  @Delete(':id')
  async deleteAttachment(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.attachmentService.delete(id);
  }
}
