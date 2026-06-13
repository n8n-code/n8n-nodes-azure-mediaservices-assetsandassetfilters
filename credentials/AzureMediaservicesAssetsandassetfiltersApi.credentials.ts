import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMediaservicesAssetsandassetfiltersApi implements ICredentialType {
        name = 'N8nDevAzureMediaservicesAssetsandassetfiltersApi';

        displayName = 'Azure Mediaservices Assetsandassetfilters API';

        icon: Icon = { light: 'file:../nodes/AzureMediaservicesAssetsandassetfilters/azure-mediaservices-assetsandassetfilters.png', dark: 'file:../nodes/AzureMediaservicesAssetsandassetfilters/azure-mediaservices-assetsandassetfilters.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mediaservices Assetsandassetfilters API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
