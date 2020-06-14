import Loadable from '@/uilts/loadable'


const Home = Loadable(() => import('@/pages/home'))
const Tab = Loadable(() => import('@/pages/tab'))
const Login = Loadable(() => import('@/pages/login'))
const Register = Loadable(() => import('@/pages/register'))

export {
    Tab,
    Home,
    Login,
    Register
}