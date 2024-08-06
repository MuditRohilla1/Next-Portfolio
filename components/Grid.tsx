import { gridItems } from "@/Data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
    return (
        <section id="about">
            <div className="py-20">
                <h1 className="heading">
                    A brief Glimpse{" "}
                    <span className="text-purple">About Me</span>
                </h1>
                <BentoGrid className="w-full py-20">
                    {gridItems.map((item, i) => (
                        <BentoGridItem
                            id={item.id}
                            key={i}
                            title={item.title}
                            description={item.description}
                            // remove icon prop
                            // remove original classname condition
                            className={item.className}
                            img={item.img}
                            imgClassName={item.imgClassName}
                            titleClassName={item.titleClassName}
                            spareImg={item.spareImg}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default Grid;