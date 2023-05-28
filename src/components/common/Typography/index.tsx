import { ReactNode } from 'react'
import { Cormorant_Garamond, Urbanist } from 'next/font/google'
import '../../../styles/components/typography.scss'

const cormorantGaramond400 = Cormorant_Garamond({
    subsets: ['latin'],
    weight: "400",
});

const cormorantGaramond700 = Cormorant_Garamond({
    subsets: ['latin'],
    weight: "700",
});

const urbanist400 = Urbanist({
    subsets: ['latin'],
    weight: '400',
});

const urbanist700 = Urbanist({
    subsets: ['latin'],
    weight: '700',
});


type TypographyProps = {
    variant: string,
    font: string,
    weight: string,
    children: ReactNode,
}

export default function Typography({variant, font, weight, children}: TypographyProps) {

    const selectedFontAndWeight = (font: string, weight: string) => {
        if(font === 'primary' && weight === 'regular'){
            return urbanist400
        }
        if(font === 'primary' && weight === 'bold'){
            return urbanist700
        }
        if(font === 'secondary' && weight === 'regular'){
            return cormorantGaramond400
        }
        if(font === 'secondary' && weight === 'bold'){
            return cormorantGaramond700
        }
        console.error('Not found font', font, weight)
    }

    const allClass = `${`typ--${variant}`} ${selectedFontAndWeight(font, weight)?.className}`
    const renderTypography = () => {
        switch(variant){
            case 'h1':
                return <h1 className={allClass}>{children}</h1>
            case 'h2':
                return <h2 className={allClass}>{children}</h2>
            case 'h3':
                return <h3 className={allClass}>{children}</h3>
            case 'h4':
                return <h4 className={allClass}>{children}</h4>
            case 'large':
                return <p className={allClass}>{children}</p>
            case 'normal':
                return <p className={allClass}>{children}</p>
            case 'small':
                return <p className={allClass}>{children}</p>
            case 'label':
                return <p className={allClass}>{children}</p>
        }
    }
    return (
        <>
            {renderTypography()}
        </>
    )
  }
  