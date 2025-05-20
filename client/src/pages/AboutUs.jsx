import { Paragraph } from "@/custom/Typography";
import NavigateSloter from "@/components/NavigateSloter";
import SocialMedia from "@/components/SocialMedia";

export default function AboutUs() {
    return (
        <div className="max-w-4xl my-26 mx-auto px-6">
            <NavigateSloter img='/assets/AboutUs.png' headline='About Us' />

            <Paragraph>
                Launched in 2005, spaceswala.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At spaceswala.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.
            </Paragraph>

            <>
                <h4 className="scroll-m-20 mt-8 text-2xl font-semibold tracking-tight">
                    Why spaceswala.com?
                </h4>
                <Paragraph>
                    At present, spaceswala.com prides itself for having around nine lakh property listings spanning across 600+ cities in India. Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, spaceswala.com offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.
                </Paragraph>
                <Paragraph>
                    With the ever-evolving online search behaviour, spaceswala.com shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!
                </Paragraph>
            </>

            <>
                <NavigateSloter img='/assets/award.png' headline='Awards & Recognitions' />

                <ul className="my-6 ml-6 text-sm list-disc [&>li]:mt-2 leading-7">
                    <li>
                        <strong>PropTech Mobile App of the Year Award 2019:</strong> spaceswala.com won the award for ‘Personalized User Journey’.
                    </li>
                    <li>
                        <strong>Best Mobile Appies Award 2015:</strong> spaceswala.com won the award for having the ‘Most Innovative Mobile App’ in the real estate category.
                    </li>
                    <li>
                        <strong>CMO ASIA Awards 2012:</strong> spaceswala.com was awarded the ‘Most Admired Real Estate Website of the Year’ at the 3rd CMO Asia Awards for excellence in the real estate segment.
                    </li>
                    <li>
                        <strong>BCI Awards 2012:</strong> spaceswala.com was recognised as the ‘Best Real Estate Portal’ in 2012.
                    </li>
                    <li>
                        <strong>Accommodation Times Awards 2012:</strong> spaceswala.com was announced the ‘Best Online Realty Portal’ by the Accommodation Times in 2012.
                    </li>
                </ul>
            </>

            <Paragraph className="font-semibold opacity-75 mb-3">
                Connect with us:
            </Paragraph>
            <SocialMedia />
        </div>
    )
}
