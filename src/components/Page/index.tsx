import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import { type InlineProps, type StackProps, Inline, Stack, vars } from '@deliverect/galaxy-react'
import './Page.css'

// ─── Scroll context ───────────────────────────────────────────────────────────

const ScrollContext = createContext<{
  isScrolled: boolean
  canScrollDown: boolean
  setIsScrolled: (v: boolean) => void
  setCanScrollDown: (v: boolean) => void
}>({ isScrolled: false, canScrollDown: false, setIsScrolled: () => {}, setCanScrollDown: () => {} })

// ─── Components ───────────────────────────────────────────────────────────────

function Root({ children, flush = false, ...rest }: StackProps & { flush?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [canScrollDown, setCanScrollDown] = useState(false)
  return (
    <ScrollContext.Provider value={{ isScrolled, canScrollDown, setIsScrolled, setCanScrollDown }}>
      <div
        style={{
          height: '100%',
          padding: flush ? 0 : vars.spacing['100'],
          backgroundColor: vars.colors.background.navigation1,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack
          borderRadius={flush ? undefined : 'xl'}
          boxShadow={flush ? undefined : 1}
          style={{
            backgroundColor: vars.colors.background.default,
            overflow: 'hidden',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            minHeight: 0,
          }}
          {...rest}
        >
          {children}
        </Stack>
      </div>
    </ScrollContext.Provider>
  )
}


function Header({ children, ...rest }: InlineProps) {
  const { isScrolled } = useContext(ScrollContext)
  return (
    <Inline
      px="300"
      py="200"
      alignX="spaceBetween"
      alignY="center"
      style={{
        flexShrink: 0,
        borderBottom: `1px solid ${isScrolled ? vars.colors.border.neutral.default.default : 'transparent'}`,
        transition: 'border-color 0.15s ease',
      }}
      {...rest}
    >
      {children}
    </Inline>
  )
}

function Body({ children, ...rest }: StackProps) {
  const { setIsScrolled, setCanScrollDown } = useContext(ScrollContext)
  const ref = useRef<HTMLElement>(null)

  const checkScroll = useCallback((el: HTMLElement) => {
    setIsScrolled(el.scrollTop > 0)
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 1)
  }, [setIsScrolled, setCanScrollDown])

  useEffect(() => {
    if (ref.current) checkScroll(ref.current)
  }, [checkScroll])

  return (
    <Stack
      px="300"
      style={{ flex: 1, overflow: 'auto' }}
      ref={ref as React.Ref<HTMLDivElement>}
      onScroll={(e) => checkScroll(e.currentTarget as HTMLElement)}
      {...rest}
    >
      {children}
    </Stack>
  )
}

function Footer({ progressBar, children, ...rest }: InlineProps & { progressBar?: ReactNode }) {
  const { canScrollDown } = useContext(ScrollContext)
  return (
    <div
      style={{
        flexShrink: 0,
        borderTop: `1px solid ${canScrollDown ? vars.colors.border.neutral.default.default : 'transparent'}`,
        transition: 'border-color 0.15s ease',
      }}
    >
      {progressBar}
      <Inline
        px="300"
        py="200"
        space="100"
        alignX="spaceBetween"
        {...rest}
      >
        {children}
      </Inline>
    </div>
  )
}

export const Page = { Root, Header, Body, Footer }
