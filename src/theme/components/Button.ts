import { colors } from "../constants";

const buttonTheme = {
    baseStyle: {
        fontWeight: 500,
    },
    sizes: {
        md: {
            h: '48px',
            fontSize: 16,
            px: '32px',
        },
    },
    variants: {
        solid: (props: { colorMode: string; }) => ({
            bg: props.colorMode === 'dark' ? 'blue.300' : 'blue.500',
            color: 'white',
            _hover: {
                bg: props.colorMode === 'dark' ? 'blue.200' : 'blue.600',
            },
            _active: {
                bg: props.colorMode === 'dark' ? 'blue.400' : 'blue.700',
            },
        }),
        'outline-black': (props: { colorMode: string; }) => ({
            bg: props.colorMode === 'dark' ? colors.devfest.hero : colors.devfest.hero,
            border: `2px solid ${colors.primary.body}`,
            color: colors.primary.body,
            _hover: {
                bg: props.colorMode === 'dark' ? '#f7c7c7' : '#f7c7c7',
            },
            _active: {
                bg: props.colorMode === 'dark' ? 'blue.400' : 'blue.700',
            },
        }),
    },
    defaultProps: {
        size: 'md',
        variant: 'solid',
        colorScheme: 'blue',
    },
}

export default buttonTheme;