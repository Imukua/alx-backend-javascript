import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let pic;
  let user;
  try {
    pic = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    pic = null;
    user = null;
  }
  return { pic, user };
}
