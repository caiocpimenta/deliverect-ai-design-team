import { type ReactNode } from 'react'
import { type StackProps, Heading, Stack, Text, vars } from '@deliverect/galaxy-react'

/** Centred 744 px max-width container, matches MC StepContent */
function Content({ children, ...rest }: StackProps) {
  return (
    <Stack
      space="150"
      style={{ maxWidth: '744px', width: '100%', marginTop: vars.spacing['500'] }}
      {...rest}
    >
      {children}
    </Stack>
  )
}

/** Heading + subtitle block */
function Info({ title, description }: { title: string | ReactNode; description: string }) {
  return (
    <Group>
      <Heading level={3}>{title}</Heading>
      <Text size="sm" color="secondary">{description}</Text>
    </Group>
  )
}

/** Tight stack — wraps a logical sub-section of form fields */
function Group({ children, ...rest }: StackProps) {
  return (
    <Stack space="050" height="auto" {...rest}>
      {children}
    </Stack>
  )
}

export const Step = { Content, Info, Group }
