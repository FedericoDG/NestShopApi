import { BadRequestException } from '@nestjs/common';

export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  // eslint-disable-next-line @typescript-eslint/ban-types
  cb: Function,
) => {
  if (!file) throw new BadRequestException();

  const allowedFileTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/svg+xml',
  ];

  if (!allowedFileTypes.includes(file.mimetype)) {
    return cb(new Error('File type not allowed'), false);
  }

  cb(null, true);
};
