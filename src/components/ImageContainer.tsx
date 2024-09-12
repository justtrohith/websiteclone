import Image from 'next/image';

interface ImageContainerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  width = 300, // Default width
  height = 300, // Default height
}) => {
  return (
    <div className="w-full h-full max-w-[350px] mb-[40px]">
      <Image 
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageContainer;
