import { provideRouter, RouterConfig }  from '@angular/router';

import { SchoolListComponent, SchoolDetailComponent, SchoolEditComponent, SchoolNewComponent } from './objectcomponents/schools.component';
import { EdicListComponent, EdicDetailComponent, EdicEditComponent, EdicNewComponent } from './objectcomponents/edic.component';
import { AssociationListComponent, AssociationDetailComponent, AssociationEditComponent, AssociationNewComponent } from './objectcomponents/association.component';
import { ApplyingTeamListComponent, ApplyingTeamDetailComponent, ApplyingTeamEditComponent, ApplyingTeamNewComponent } from './objectcomponents/applyingteam.component';
import { TeacherProfileListComponent, TeacherProfileDetailComponent, TeacherProfileEditComponent, TeacherProfileNewComponent } from './objectcomponents/teacherprofile.component';
import { EdicProfileListComponent, EdicProfileDetailComponent, EdicProfileEditComponent, EdicProfileNewComponent } from './objectcomponents/edicprofile.component';
import { AssociationProfileListComponent, AssociationProfileDetailComponent, AssociationProfileEditComponent, AssociationProfileNewComponent } from './objectcomponents/associationprofile.component';
import { ForumListComponent, ForumDetailComponent, ForumEditComponent, ForumNewComponent } from './forum/forum.component';
import { ForumChannelListComponent, ForumChannelDetailComponent, ForumChannelEditComponent, ForumChannelNewComponent } from './forum/forum.component';
import { ForumThreadListComponent, ForumThreadDetailComponent, ForumThreadEditComponent, ForumThreadNewComponent } from './forum/forum.component';
import { ForumPostListComponent, ForumPostDetailComponent, ForumPostEditComponent, ForumPostNewComponent } from './forum/forum.component';
import { FormBuildercomponent, FormCompilercomponent } from './formcreator/component';
import { LoginComponent, LogoutComponent, RegisterComponent} from './components/login.component';
import { ForumComponent } from './forum/forum.component';

import { HomeComponent } from './pages/home.component';
import { OwnProfileComponent } from './pages/ownprofile.component';
import { ProfileViewComponent } from './pages/profileview.component';
import { ProfileCreationSelection } from './pages/profilecreation.component';
import { CommunityBlogComponent } from './pages/communityblog.component';
import { SchoolBlogComponent } from './pages/schoolblog.component';

import { AuthGuard } from './auth.guard';

import { DRFModelRouter } from "./objectmodel/drf.model";

const schoolRoutes: RouterConfig = new DRFModelRouter("partners/school", SchoolListComponent, SchoolDetailComponent, SchoolNewComponent, SchoolEditComponent, AuthGuard).routes();
const edicRoutes: RouterConfig = new DRFModelRouter("partners/edic", EdicListComponent, EdicDetailComponent, EdicNewComponent, EdicEditComponent, AuthGuard).routes();
const associationRoutes: RouterConfig = new DRFModelRouter("partners/association", AssociationListComponent, AssociationDetailComponent, AssociationNewComponent, AssociationEditComponent, AuthGuard).routes();

const routes: RouterConfig = [
  { path: '', component: HomeComponent },

  { path: 'signup', component: RegisterComponent },

  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },

  { path: 'apply', component: ApplyingTeamNewComponent, canActivate: [AuthGuard] },

  ...schoolRoutes,
  ...edicRoutes,
  ...associationRoutes,

  { path: 'application/:id', component: ApplyingTeamDetailComponent, canActivate: [AuthGuard] },

  { path: 'profile', component: OwnProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileViewComponent},
  { path: 'profile/create', component: ProfileCreationSelection, canActivate: [AuthGuard] },
  { path: 'profile/create/teacher', component: TeacherProfileNewComponent, canActivate: [AuthGuard] },
  { path: 'profile/create/edic', component: EdicProfileNewComponent, canActivate: [AuthGuard] },
  { path: 'profile/create/association', component: AssociationProfileNewComponent, canActivate: [AuthGuard] },
  //{ path: 'profile/create/student', component: SchoolNewComponent, canActivate: [AuthGuard] },

  { path: 'report/create', component: FormBuildercomponent, canActivate: [AuthGuard] },
  { path: 'report/new', component: FormCompilercomponent, canActivate: [AuthGuard] },
  { path: 'report/:id/new', component: FormCompilercomponent, canActivate: [AuthGuard] },
  { path: 'report/:id/edit/:iid', component: FormCompilercomponent, canActivate: [AuthGuard] },

  { path: 'forum', component: ForumComponent, canActivate: [AuthGuard] , children:[
    { path: '', component: ForumChannelListComponent, canActivate: [AuthGuard] },
    { path: 'new', component: ForumChannelNewComponent, canActivate: [AuthGuard] },
    { path: ':id', component: ForumChannelDetailComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ForumThreadListComponent, canActivate: [AuthGuard] },
      { path: ':id', component: ForumThreadDetailComponent, canActivate: [AuthGuard], children: [
        { path: '', component: ForumPostListComponent, canActivate: [AuthGuard] },
        { path: 'new', component: ForumPostNewComponent, canActivate: [AuthGuard] },
      ] }
    ] }
  ] },

  { path: 'schoolblog', component: SchoolBlogComponent },
  { path: 'communityblog', component: CommunityBlogComponent },
];

console.log(routes);

export const appRouterProviders = [
  provideRouter(routes)
];