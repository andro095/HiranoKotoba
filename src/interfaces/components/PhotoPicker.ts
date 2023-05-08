
export interface PhotoPickerProps {
    imageSrc?: string;
    setImage?: (image: string) => void;
    image?: string;
    viewOnly?: boolean;
}