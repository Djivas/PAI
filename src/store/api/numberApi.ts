import axios from 'axios';

export async function authenticateUser() {
  try {
    const response = await axios.post<AuthenticationResponse>('https://pai4.joinposter.com/api/auth', null, {
      params: {
        application_id: '3155',
        redirect_uri: 'https://pai-kg.joinposter.com/poster/auth',
        response_type: 'code',
      },
      headers: {
        Cookie: 'pos_session=Dz5WawBgA24AK1pzUzpWY1Q2UjtcKwBzVG1ZIAZyAT5SNFM7WlcGZlRgVnNQPQQgAGpaM1Q1U21UJABnUTRSNgM7XjZTYVc2BDVTbAcwAWsPalZiAGUDNgBiWjJTYVZqVDdSYlxoADFUa1kxBmABYFJoU2ZaawY5VDBWc1A9BCAAaloxVDdTbVQkADpRdFINAz5eMFMwV3MEaFMmByYBKg9kViIAbANlAGlaOlMiVmBUZ1IxXD8AOlQxWWsGYgFnUmFTZlo%2BBj9UNFZrUDwEYgBgWjNUJVNsVHUAaVE1UmIDZV52UyFXcgRoUycHCgFpDzhWNAA4AyAAclo7U3NWaFQ2UjtcKwAiVDNZIAY7AWZSaFNvWioGY1RlViJQcgQMADFaY1RzUz5UcAA6UXBSKwN9Xm9TPVc7BDxTYwdsAT4PaFZpAGEDZABhWjZTO1YhVDxSOFwzACJUfVkgBmQBJVIEUzFaaQZ7VGVWc1A9BCAAalowVD1TdVQkAGhRd1JoA25eZlNuVyMEYlM0ByABfA83Vg4AJgM1ACJaYVNtViFUJFI6XGgAOlQ7WWkGegEkUmFTZFo7BjVUJlYjUGMEIAAgWm9UaVMkVGMADFFwUisDL14xU3ZXOgR%2BU28HYQEyD31WMgA5AzAANVoiUztWIVQ8UjhcMwAiVGtZPwZoATJSNVMhWlcGZlRgVnNQPQQgAGpaNFQ9U3VUNQBiUTFSZwN9Xm9TJ1c7BDxTZwdvASoPLVY0ADIDPQAiWmVTY1YmVFlSdFx7AGlUKlloBnIBbVJvU2RaMgYtVGxWJVByBCMAI1o6VChTeFR2ADJRbVJ%2FAzReM1N6V2sEYlM8BzsBeA8wViIAIgMxACJaLlNjVj1Ua1IuXHkAb1R7WScGZAElUnRTNFp9BntUbFZzUD0ELgAt',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Ошибка при аутентификации пользователя:', error);
    throw error;
  }
}

export interface AuthenticationResponse {
  token: string;
  // Другие поля
}
