import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import Send from 'src/components/Dashboard/Views/Send.vue'
import Receive from 'src/components/Dashboard/Views/Receive.vue'
import Transactions from 'src/components/Dashboard/Views/Transactions.vue'
import Settings from 'src/components/Dashboard/Views/Settings.vue'
import CommunityProposals from 'src/components/Dashboard/Views/CommunityProposals.vue'
import MyProposals from 'src/components/Dashboard/Views/MyProposals.vue'
import CreateProposal from 'src/components/Dashboard/Views/CreateProposal.vue'
import ProposalVoteList from 'src/components/Dashboard/Views/ProposalVoteList.vue'
import PaymentRequestVoteList from 'src/components/Dashboard/Views/PaymentRequestVoteList.vue'
import News from 'src/components/Dashboard/Views/News.vue'
import BlockExplorer from 'src/components/Dashboard/Views/BlockExplorer.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'send',
        name: 'Send',
        component: Send
      },
      {
        path: 'receive',
        name: 'Receive',
        component: Receive
      },
      {
        path: 'transactions',
        name: 'Transactions',
        component: Transactions
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings
      },
      {
        path: 'community-proposals',
        name: 'CommunityProposals',
        component: CommunityProposals
      },
      {
        path: 'create-proposal',
        name: 'CreateProposal',
        component: CreateProposal
      },
      {
        path: 'proposal-vote-list',
        name: 'ProposalVoteList',
        component: ProposalVoteList
      },
      {
        path: 'payment-request-vote-list',
        name: 'PaymentRequestVoteList',
        component: PaymentRequestVoteList
      },
      {
        path: 'my-proposals',
        name: 'MyProposals',
        component: MyProposals
      },
      {
        path: 'news',
        name: 'News',
        component: News
      },
      {
        path: 'block-explorer',
        name: 'BlockExplorer',
        component: BlockExplorer
      },
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
