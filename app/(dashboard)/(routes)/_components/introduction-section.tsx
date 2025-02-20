import Tag from "@/components/tags";

const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis porro nemo natus cum quas. Odit iure alias maiores corrupti laudantium hic`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">

                <div className="flex justify-center">
                    <Tag>
                        Introducing JOB_PORTAL!
                    </Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 mx-auto">
                    <span>Lorem ipsum dolor sit</span>
                    <span className="text-slate-700">{text}</span>
                    <span className="text-blue-400 block">That&apos;s we Build Community</span>
                </div>
            </div>
        </section>
    )
}
