import { Injectable } from '@nestjs/common';
import { spfi } from '@pnp/sp';
import { SPDefault } from '@pnp/nodejs';
import { Configuration } from '@azure/msal-node';
import { SharePointDto } from './sharepoint.dto';

@Injectable()
export class SharePointService {
  private sp;
  private readonly siteUrl =
    'https://your-tenant.sharepoint.com/sites/your-site';

  private readonly tenantId = 'your-tenant-id';

  private readonly clientId = 'your-client-id';

  private readonly clientSecret = 'your-client-secret';

  constructor() {
    const configuration: Configuration = {
      auth: {
        authority: `https://login.microsoftonline.com/${this.tenantId}/`,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      },
    };

    this.sp = spfi(this.siteUrl).using(
      SPDefault({
        msal: {
          config: configuration,
          scopes: [`https://${this.tenantId}.sharepoint.com/.default`],
        },
      }),
    );
  }

  async upload(fileBuffer: Buffer, fileName: string): Promise<SharePointDto> {
    const folder = this.sp.web.getFolderByServerRelativePath(
      '/Shared Documents/your-folder',
    );
    const result = await folder.files.add(fileName, fileBuffer, true);

    const sharePointDto = new SharePointDto();

    sharePointDto.url = `${this.siteUrl}${result.data.ServerRelativeUrl}`;

    sharePointDto.name = result.data.Name;

    sharePointDto.uniqueId = result.data.UniqueId;

    sharePointDto.createdAt = result.data.TimeCreated;

    sharePointDto.modifiedAt = result.data.TimeLastModified;

    sharePointDto.size = result.data.Length;

    return sharePointDto;
  }
}
