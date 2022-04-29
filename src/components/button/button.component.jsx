import {BaseButton, ButtonContainer, ContactButton, LargeBaseButton, LargeContactButton} from './button.styles'


export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    contact: 'contact',
    baseLarge: 'base-large',
    contactLarge: 'contact-large'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.contact]: ContactButton,
    [BUTTON_TYPE_CLASSES.baseLarge]: LargeBaseButton,
    [BUTTON_TYPE_CLASSES.contactLarge]: LargeContactButton,
    }[buttonType]
)

const Button = ({buttonType, children, ...otherProps}) => {

    const CustomButton = getButton(buttonType)
    return (
        <ButtonContainer {...otherProps}>
            <CustomButton>{children}</CustomButton>
        </ButtonContainer>
    )
}

export default Button;