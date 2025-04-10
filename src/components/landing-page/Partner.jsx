import { TypographyH2, TypographyMuted } from "@/custom/Typography";
import Headline from "@/custom/Headline";

export default function Partner() {
    return (
        <>
            <div className="text-center">
                <Headline smallHeadline="Partner" headline="Our Partner" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <img src="/assets/partner.avif" alt="partner" className="rounded-md" />
                </div>
                <div className="flex flex-col justify-center items-center gap-6">
                    <TypographyH2>
                        The Best Partner to Find New House.
                    </TypographyH2>
                    <TypographyMuted>
                        🏡 Your journey to a dream home begins here.
                        We understand that buying a home is more than a transaction — it’s a life decision.
                        With expert guidance and verified listings, we ensure every step is smooth.
                        From cozy apartments to luxurious villas, we bring you the best options.
                        Our team works tirelessly to match you with the right property.
                        Transparent, reliable, and customer-first — that's our promise.
                        Because your future deserves the best partner in real estate.
                    </TypographyMuted>
                </div>
            </div>
        </>
    )
}
