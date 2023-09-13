'use server'

import cloudinary from 'cloudinary'
import { SearchResult } from '../gallery/page';

export default async function createFolder(image: SearchResult , folder: string) {
    await cloudinary.v2.api.create_folder(folder)

  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");

  await cloudinary.v2.uploader.rename(image.public_id, `${folder}/${publicId}`);


} 