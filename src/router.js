import { createRouter, createWebHistory } from 'vue-router'
import Lots from './Pages/Lots/Index.vue'
import Lot from './Pages/Lots/Show.vue'
import CreateLot from './Pages/Lots/Create.vue'
import Login from './Pages/Auth/Login.vue'
import Register from './Pages/Auth/Register.vue'
import VerifyEmail from './Pages/Auth/VerifyEmail.vue'
import Welcome from './Pages/Welcome.vue'
import Profile from './Pages/Profile/Show.vue'
import Auctions from './Pages/Auctions/Index.vue'
import LotsEdit from './Pages/Lots/Edit.vue'
import Bids from './Pages/Bids/Index.vue'
import Bid from './Pages/Bids/Show.vue'
import CreateBid from './Pages/Bids/Create.vue'
import EditProfile from './Pages/Profile/Edit.vue'
import AdminWelcome from './Admin/Pages/Welcome.vue'
import AdminAuctions from './Admin/Pages/Auctions/Index.vue'
import AdminAuctionsEdit from './Admin/Pages/Auctions/Edit.vue'
import AuctionBids from './Pages/Auctions/Bids.vue'
import AdminAuctionBids from './Admin/Pages/Auctions/Bids.vue'
import AdminUsers from './Admin/Pages/Users/Index.vue'
import AdminUsersEdit from './Admin/Pages/Users/Edit.vue'
import AdminCategories from './Admin/Pages/Categories/Index.vue'
import AdminAnalysis from './Admin/Pages/Analysis/Index.vue'
import AdminRequests from './Admin/Pages/Requests/Index.vue'
import AdminRequestsAuctionsCreate from './Admin/Pages/Requests/CreateAuction.vue'
import AdminRequestsAuctionsEdit from './Admin/Pages/Requests/EditAuction.vue'

const routes = [
    { path: '/', component: Welcome },
    { path: '/welcome', component: Welcome },
    { path: '/lots', component: Lots },
    { path: '/lots/create', component: CreateLot },
    { path: '/lots/:id', component: Lot },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/verify-email', component: VerifyEmail },
    { path: '/profile', component: Profile },
    { path: '/profile/edit', component: EditProfile },
    { path: '/auctions', component: Auctions },
    { path: '/lots/edit', component: LotsEdit },
    { path: '/bids', component: Bids },
    { path: '/bid', component: Bid },
    { path: '/bids/create', component: CreateBid },
    { path: '/admin/auctions', component: AdminAuctions },
    { path: '/admin', component: AdminWelcome },
    { path: '/admin/auctions/edit', component: AdminAuctionsEdit },
    { path: '/auctions/bids', component: AuctionBids },
    { path: '/admin/auctions/bids', component: AdminAuctionBids },
    { path: '/admin/users', component: AdminUsers },
    { path: '/admin/users/edit', component: AdminUsersEdit },
    { path: '/admin/categories', component: AdminCategories },
    { path: '/admin/requests', component: AdminRequests },
    { path: '/admin/requests/auctions/create', component: AdminRequestsAuctionsCreate },
    { path: '/admin/requests/auctions/edit', component: AdminRequestsAuctionsEdit },
    { path: '/admin/analysis', component: AdminAnalysis },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
