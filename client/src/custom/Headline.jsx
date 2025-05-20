import { TypographyH2, TypographyH3 } from './Typography'

export default function Headline({ smallHeadline, headline }) {
    return (
        <div className='mt-12 mb-8'>
            <TypographyH3 className="text-[#E8505B]">
                {smallHeadline}
            </TypographyH3>
            <TypographyH2>
                {headline}
            </TypographyH2>
        </div>
    )
}
