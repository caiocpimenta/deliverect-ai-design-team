import { type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Sidebar,
  Navigation,
  Deliverect,
  AppsFill,
  AppsOutline,
  CircleQuestionFill,
  CircleQuestionOutline,
  HomeFill,
  HomeOutline,
  LabelFill,
  LabelOutline,
  MegaphoneFill,
  MegaphoneOutline,
  SettingsFill,
  SettingsOutline,
  StarFill,
  StarOutline,
  StoreFill,
  StoreOutline,
  UsersFill,
  UsersOutline,
  WalletFill,
  WalletOutline,
  Logout,
  CircleUserOutline,
  SparklesOutline,
  SparklesFill,
  MenuFill,
  MenuOutline,
  GraphBarFill,
  GraphBarOutline,
  Avatar,
  DropdownMenu,
  CampaignManagerLogo,
  DirectLogo,
  DispatchLogo,
  KioskLogo,
  PickupLogo,
  PulseLogo,
  QuestLogo,
  ResolveLogo,
  RestaurantsLogo,
  vars,
} from '@deliverect/galaxy-react'
import { useState, useEffect } from 'react'
import { DeliverectAILogo } from './DeliverectAILogo'

interface NavItem {
  path: string
  label: string
  icon: ReactNode
  activeIcon: ReactNode
  matchPrefix?: string
}

const navItems: NavItem[] = [
  {
    path: '/home-a',
    label: 'Home',
    icon: <HomeOutline size="lg" />,
    activeIcon: <HomeFill size="lg" />,
  },
  {
    path: '/agents',
    label: 'Mission Control',
    icon: <SparklesOutline size="lg" />,
    activeIcon: <SparklesFill size="lg" />,
    matchPrefix: '/agents',
  },

  {
    path: '/settings',
    label: 'Settings',
    icon: <SettingsOutline size="lg" />,
    activeIcon: <SettingsFill size="lg" />,
  },
]

const products = [
  { id: 'restaurants', Logo: RestaurantsLogo },
  { id: 'direct',      Logo: DirectLogo },
  { id: 'kiosk',       Logo: KioskLogo },
  { id: 'pulse',       Logo: PulseLogo },
  { id: 'pickup',      Logo: PickupLogo },
  { id: 'resolve',     Logo: ResolveLogo },
  { id: 'dispatch',    Logo: DispatchLogo },
  { id: 'quest',       Logo: QuestLogo },
  { id: 'dcm',         Logo: CampaignManagerLogo },
]

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [sidebarActive, setSidebarActive] = useState<string>('deliverect-ai')
  const [dcmActive, setDcmActive] = useState<string>('dashboard')

  // Sync sidebar active state from current route
  useEffect(() => {
    if (location.pathname.startsWith('/dcm/')) {
      setSidebarActive('dcm')
    } else if (
      location.pathname.startsWith('/agents') ||
      location.pathname.startsWith('/promo-agent') ||
      location.pathname.startsWith('/analytics') ||
      location.pathname.startsWith('/settings') ||
      location.pathname === '/home-a'
    ) {
      setSidebarActive('deliverect-ai')
    }
    if (location.pathname.startsWith('/dcm/campaigns')) {
      setDcmActive('marketing.campaigns')
    }
  }, [location.pathname])

  const isNavActive = (item: NavItem) =>
    item.matchPrefix
      ? location.pathname.startsWith(item.matchPrefix)
      : location.pathname === item.path

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        width: '100%',
        backgroundColor: vars.colors.background.navigation1,
        overflow: 'hidden',
      }}
    >
      {/* Galaxy Sidebar */}
      <Sidebar.Wrapper>
        <Sidebar.Logo>
          <Deliverect size="2xl" color="neutral" />
        </Sidebar.Logo>

        {/* Product logos */}
        <Sidebar.Section>
          {products.map(({ id, Logo }) => (
            <Sidebar.Item
              key={id}
              variant="product"
              active={sidebarActive === id}
              Icon={<Logo size="lg" color="inherit" />}
              onClick={() => {
                setSidebarActive(id)
                if (id === 'dcm') navigate('/dcm/campaigns')
              }}
            />
          ))}
        </Sidebar.Section>

        <Sidebar.Separator />

        {/* More apps */}
        <Sidebar.Section>
          <Sidebar.Item
            variant="action"
            active={sidebarActive === 'more'}
            Icon={
              sidebarActive === 'more'
                ? <AppsFill size="lg" />
                : <AppsOutline size="lg" />
            }
            onClick={() => setSidebarActive('more')}
          />
        </Sidebar.Section>

        {/* Bottom actions */}
        <Sidebar.Section alignY="bottom" height="full">
          <Sidebar.Item
            variant="action"
            active={sidebarActive === 'deliverect-ai'}
            Icon={<DeliverectAILogo />}
            onClick={() => { setSidebarActive('deliverect-ai'); navigate('/agents') }}
          />

          <Sidebar.Item
            variant="action"
            active={sidebarActive === 'help'}
            Icon={
              sidebarActive === 'help'
                ? <CircleQuestionFill size="lg" />
                : <CircleQuestionOutline size="lg" />
            }
            onClick={() => setSidebarActive('help')}
          />

          <Sidebar.Item
            variant="action"
            active={sidebarActive === 'settings-sidebar'}
            Icon={
              sidebarActive === 'settings-sidebar'
                ? <SettingsFill size="lg" />
                : <SettingsOutline size="lg" />
            }
            onClick={() => setSidebarActive('settings-sidebar')}
          />

          <DropdownMenu.Root>
            <Sidebar.DropdownMenuTrigger>
              <Avatar.Root size="md" variant="circle">
                <Avatar.Fallback>CP</Avatar.Fallback>
              </Avatar.Root>
            </Sidebar.DropdownMenuTrigger>
            <DropdownMenu.Content sideOffset={12} side="right" align="end">
              <DropdownMenu.Item icon={<CircleUserOutline />}>
                User Settings
              </DropdownMenu.Item>
              <DropdownMenu.Item icon={<SparklesOutline />}>
                Changelog
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item icon={<Logout />} status="critical">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Sidebar.Section>
      </Sidebar.Wrapper>

      {/* Campaign Manager navigation panel */}
      {sidebarActive === 'dcm' && (
        <Navigation.Root environment="production">
          <Navigation.Heading environment="production">Campaign Manager</Navigation.Heading>

          <Navigation.List>
            <Navigation.Item
              label="Dashboard"
              target="_self"
              Icon={<HomeOutline size="lg" />}
              ActiveIcon={<HomeFill size="lg" />}
              isActive={dcmActive === 'dashboard'}
              onClick={() => setDcmActive('dashboard')}
            />

            <Navigation.Item
              label="Marketing"
              target="_self"
              Icon={<MegaphoneOutline size="lg" />}
              ActiveIcon={<MegaphoneFill size="lg" />}
              isActive={dcmActive === 'marketing'}
              isOpen={dcmActive.startsWith('marketing')}
              onClick={() => setDcmActive('marketing')}
            >
              <Navigation.List variant="sub">
                {[
                  { id: 'campaigns', label: 'Campaigns', path: '/dcm/campaigns' },
                  { id: 'discounts', label: 'Discounts' },
                  { id: 'loyalty', label: 'Loyalty' },
                  { id: 'campaign-manager', label: 'Campaign Manager' },
                ].map(sub => (
                  <Navigation.Subitem
                    key={sub.id}
                    label={sub.label}
                    target="_self"
                    isActive={dcmActive === `marketing.${sub.id}`}
                    onClick={() => {
                      setDcmActive(`marketing.${sub.id}`)
                      if (sub.path) navigate(sub.path)
                    }}
                  />
                ))}
              </Navigation.List>
            </Navigation.Item>

            <Navigation.Item
              label="Customers"
              target="_self"
              Icon={<UsersOutline size="lg" />}
              ActiveIcon={<UsersFill size="lg" />}
              isActive={dcmActive === 'customers'}
              onClick={() => setDcmActive('customers')}
            />

            <Navigation.Item
              label="Reviews"
              target="_self"
              Icon={<StarOutline size="lg" />}
              ActiveIcon={<StarFill size="lg" />}
              isActive={dcmActive === 'reviews'}
              onClick={() => setDcmActive('reviews')}
            />

            <Navigation.Item
              label="Payments"
              target="_self"
              Icon={<WalletOutline size="lg" />}
              ActiveIcon={<WalletFill size="lg" />}
              isActive={dcmActive === 'payments'}
              onClick={() => setDcmActive('payments')}
            />

            <Navigation.Item
              label="Brand kit"
              target="_self"
              Icon={<LabelOutline size="lg" />}
              ActiveIcon={<LabelFill size="lg" />}
              isActive={dcmActive === 'brand-kit'}
              onClick={() => setDcmActive('brand-kit')}
            />

            <Navigation.Item
              label="Settings"
              target="_self"
              Icon={<SettingsOutline size="lg" />}
              ActiveIcon={<SettingsFill size="lg" />}
              isActive={dcmActive === 'settings'}
              onClick={() => setDcmActive('settings')}
            />

            <Navigation.Item
              label="Sales channels"
              target="_self"
              Icon={<StoreOutline size="lg" />}
              ActiveIcon={<StoreFill size="lg" />}
              isActive={dcmActive === 'sales-channels'}
              isOpen={dcmActive.startsWith('sales-channels')}
              onClick={() => setDcmActive('sales-channels')}
            >
              <Navigation.List variant="sub">
                {[
                  { id: 'kiosk', label: 'Kiosk' },
                  { id: 'online-ordering', label: 'Online ordering' },
                  { id: 'virtual-kiosk', label: 'Virtual Kiosk' },
                  { id: 'ordering-app', label: 'Ordering app' },
                  { id: 'catering', label: 'Catering' },
                ].map(sub => (
                  <Navigation.Subitem
                    key={sub.id}
                    label={sub.label}
                    target="_self"
                    isActive={dcmActive === `sales-channels.${sub.id}`}
                    onClick={() => setDcmActive(`sales-channels.${sub.id}`)}
                  />
                ))}
              </Navigation.List>
            </Navigation.Item>
          </Navigation.List>
        </Navigation.Root>
      )}

      {/* AI Suite navigation panel — only visible when Deliverect AI is active */}
      {sidebarActive === 'deliverect-ai' && (
        <Navigation.Root environment="production">
          <Navigation.Heading environment="production">AI Suite</Navigation.Heading>

          <Navigation.List>
            {navItems.map((item) => (
              <Navigation.Item
                key={item.path}
                label={item.label}
                target="_self"
                Icon={item.icon}
                ActiveIcon={item.activeIcon}
                isActive={isNavActive(item)}
                onClick={() => navigate(item.path)}
              />
            ))}
          </Navigation.List>
        </Navigation.Root>
      )}

      {/* Main content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  )
}
