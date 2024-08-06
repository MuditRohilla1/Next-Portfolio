'use client'
import React from 'react'
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle} from './ui/TextRevealCard'
import { BackgroundGradient } from './ui/backgroundgradient'

const Card = () => {
    return (
        <div className="flex items-center justify-center h-[30rem] bg-black-100 rounded-[22px] w-full">
            <BackgroundGradient className='rounded-[22px] bg-white dark:bg-zinc-900'>
                <TextRevealCard
                    text="You know the business"
                    revealText="I know the chemistry "
                    className='bg-black-200 shadow-md w-full rounded-[22px]'
                >
                    <TextRevealCardTitle>
                        Sometimes, you just need to see it.
                    </TextRevealCardTitle>
                    <TextRevealCardDescription>
                        Hover over the card to reveal the hidden text.
                    </TextRevealCardDescription>
                </TextRevealCard>
            </BackgroundGradient>
        </div>

    )
}

export default Card
