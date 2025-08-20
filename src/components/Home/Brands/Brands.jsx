import { Container } from "@app/components/shared/Container/Container";
import { brands } from "./brands.utils";
export function Brands() {
    return (
        <>
            <style>
                {`
                    .carousel-track {
                        display: flex;
                        width: calc(296px * ${brands.length * 2});
                        animation: scroll-left 40s linear infinite;
                    }
                    .carousel-track:hover {
                        animation-play-state: paused;
                    }
                    @keyframes scroll-left {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-296px * ${
                                brands.length
                            }));
                        }
                    }
                    
                    .brand-item {
                        width: 280px;
                        margin: 0 8px;
                        flex-shrink: 0;
                        border-left: 1px solid black;
                    }
                    .brand-item:first-child {
                        border-left: none;
                    }
                `}
            </style>

            <Container
                type="section"
                background="bg-whitep-500"
                id="brands"
                className=" bg-whitep-500 text-blackp-500 flex flex-col justify-center items-center relative overflow-hidden py-5 gap-5"
            >
                <div className="w-full flex flex-col gap-2">
                    <h2 className="text-lg lg:text-3xl font-bold px-4 md:px-10">
                        Brands
                    </h2>
                    <p className="text-md  font-light px-4 md:px-10">
                        I have collaborated with
                    </p>
                </div>

                <div className="relative w-full my-10 overflow-hidden">
                    <div className="carousel-track">
                        {/* First set of logos */}
                        {brands.map((brand, index) => (
                            <div
                                key={`brand-${index}`}
                                className="brand-item flex items-center justify-center group"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    loading="lazy"
                                    width={brand.width}
                                    height={brand.height}
                                    className=""
                                />
                            </div>
                        ))}
                        {/* Second set of logos (duplicate for seamless loop) */}
                        {brands.map((brand, index) => (
                            <div
                                key={`brand-duplicate-${index}`}
                                className="brand-item flex items-center justify-center group"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    loading="lazy"
                                    width={150}
                                    height={40}
                                    className=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </>
    );
}
