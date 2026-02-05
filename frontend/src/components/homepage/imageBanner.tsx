import { Image } from "@heroui/image";

import banner from '../../assets/image/banner.png';

export default function ImageBanner() {
    return (
        <div className="w-full">
            <Image
                alt="Banner"
                className="w-full object-cover h-48 md:h-64 lg:h-80"
                src={banner}
                removeWrapper
            />
        </div>
    );
}