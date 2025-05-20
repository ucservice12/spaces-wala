import { Paragraph, TypographyH5, TypographyMuted } from "@/custom/Typography";
import NavigateSloter from "@/components/NavigateSloter";
import { MdOutlineDoDisturb } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const tipsSet1 = [
    "Do not send money online to a 'supposed landlord/owner' using UPI, net banking, debit/credit cards, etc. if you have not met them personally.",
    "We do not recommend paying any property visit charges, gate pass charges, booking amount etc. over a call.",
    "In case a broker is showing you the property, make sure that you meet the owner or have a web session with him.",
    "Do not handover any part of the consideration/rent to the broker.",
    "Be wary of disputed land titles.",
    "Be suspicious of realty investments promising high returns (due to infra development) with little/no risk.",
    "Visit the property personally to check the interior and exterior condition; conduct due diligence.",
    "Opt for properties that have at least 3-4 clear photos of bedrooms, bath and kitchen area.",
    "Familiarise yourself with the neighbourhood, before moving in.",
    "Talk to some neighbours and make sure that the one who is showing you the property is the actual owner.",
];

const tipsSet2 = [
    "Conduct a comprehensive check of ownership to verify developer's/owners' credentials.",
    "Visit the project site/property personally, to ensure that the broker's or developer's claim is genuine and that the property is not an 'imaginary' one.",
    "Opt for a builder with good track record, checking the past record of the promoters may be helpful.",
    "Beware of false title documents. Loans may have been secured against properties that may be disputed or have remained vacant for long.",
    "It is always advisable that proper due diligence on the property is conducted prior to entering into a transaction related to a real estate.",
    "Keep in mind that open areas - lobby, park, terrace, pool, gymnasium, and lift/elevator - are not a part of Floor Space Index (FSI) or Floor Area Ratio (FAR).",
    "The Real Estate (Regulation and Development) Act 2016 and its related provisions and their applicability to the project.",
];

const tipsSet3 = [
    "Visit the accommodation/property and meet the landlord.",
    "We strongly recommend to NEVER PAY any property visit charges, gate pass charges, booking amount, etc. for visiting a property.",
    "Check all the rooms, including the kitchen and bath area for plumbing problems, such as fixture leaks and seepages, clogged drains and pipelines.",
    "Find out about the security deposit in a particular area before making the payment. Unscrupulous individuals may ask for unjustified amounts of money.",
    "Ascertain access, safety and security.",
    "Ascertain all areas in standardized units.",
];

export default function SafetyGuid() {
    const Navigate = useNavigate();
    return (
        <div className="max-w-4xl my-26 mx-auto px-6">

            <NavigateSloter img='/assets/safety.png' headline='Safety Guide' />
            <>
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    Beware - Use your Judgment
                </h3>
                <Paragraph>
                    It is in the interests of a user to exercise his/her best judgment to assess properties' and owners' authenticity. The claims being made may or may not be correct, a user is therefore advised to independently verify the authenticity of the claims being made. To this end, we have compiled a checklist which may help a user avoid deceit. We recommend that all our users MUST go through the checklist (mentioned below) prior to purchasing or renting a house.
                </Paragraph>
            </>

            <>
                <h3 className="scroll-m-20 my-6 text-2xl font-semibold tracking-tight">
                    How to Avoid Real Estate Fraud?
                </h3>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {tipsSet1?.map((tip, index) => (
                        <li key={index} className="leading-7 text-sm">
                            {tip}
                        </li>
                    ))}
                </ul>
            </>

            <>
                <h3 className="scroll-m-20 mb-6 text-2xl font-semibold tracking-tight">
                    Beware - Use your Judgment
                </h3>
                <Paragraph>
                    The buyer should conduct checks and establish authenticity of any property, or project, its title, built up area (in standardized unit), suitability for buying in a form and manner deemed appropriate at his or her COST.
                    spaceswala.com being an advertising medium does not and can not vouch for authenticity of content on its site. A lot of content is uploaded by the advertiser and we do not filter or verify the same. If a complaint is made, we will take remedial measures.
                </Paragraph>
                <Paragraph>
                    Certain points to bear in mind:
                </Paragraph>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {tipsSet2?.map((tip, index) => (
                        <li key={index} className="leading-7 text-sm">
                            {tip}
                        </li>
                    ))}
                </ul>
            </>

            <>
                <h3 className="scroll-m-20 my-6 text-2xl font-semibold tracking-tight">
                    For a Tenant
                </h3>
                <Paragraph>
                    Certain points to bear in mind:
                </Paragraph>
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                    {tipsSet3?.map((tip, index) => (
                        <li key={index} className="leading-7 text-sm">
                            {tip}
                        </li>
                    ))}
                </ul>
            </>

            <div className="border rounded-md mt-6 p-6">
                <div className="flex items-center gap-1">
                    <MdOutlineDoDisturb size={16} color="blue" />
                    <TypographyH5>
                        Disclaimer
                    </TypographyH5>
                </div>
                <TypographyMuted className="text-xs my-3">
                    spaceswala.com is a platform which acts a medium for allowing people having converging interests involving real estate transactions, namely the buyer/tenant and owner/broker.
                </TypographyMuted>
                <TypographyMuted className="text-xs">
                    spaceswala.com is merely a preliminary medium of contact and exchange of information, users are strongly advised to have independent third party verifications (whether marked verified or not) prior to proceeding with any transactions involving real estate. The onus of finding a genuine property, be it for purchase or rental purpose, lies on the user.
                </TypographyMuted>
                <TypographyMuted className="text-xs my-3">
                    For further information, you are advised to check the <span className="text-blue-600 cursor-pointer" onClick={() => Navigate('/terms-and-conditions')}>terms and conditions</span> regulating use of spaceswala.com
                </TypographyMuted>
            </div>
        </div>
    )
}
