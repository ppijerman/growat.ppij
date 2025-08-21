export type ImageMedia = {
  url: string
  name: string
  width: number
  height: number
  formats: ImageFormats
}

export type ImageFormats = {
  large?: ImageFormat
  medium?: ImageFormat
  small?: ImageFormat
  thumbnail?: ImageFormat
}

export type ImageFormat = {
  url: string
  name: string
  width: number
  height: number
}

export function mapImageMedia(image: ImageMedia): ImageMedia {
  return {
    ...image,
    url: `${process.env.BACKEND_API_URL}${image.url}`,
    formats: {
      large: mapImageFormat(image.formats.large),
      medium: mapImageFormat(image.formats.medium),
      small: mapImageFormat(image.formats.small),
      thumbnail: mapImageFormat(image.formats.thumbnail),
    },
  }
}

export function mapImageFormat(format?: ImageFormat): ImageFormat | undefined {
  if (!format || !format.url) {
    return undefined
  }

  return {
    ...format,
    url: `${process.env.BACKEND_API_URL}${format.url}`,
  }
}
