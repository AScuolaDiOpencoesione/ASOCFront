"use strict";
var router_1 = require('@angular/router');
var schools_component_1 = require('./objectcomponents/schools.component');
var edic_component_1 = require('./objectcomponents/edic.component');
var association_component_1 = require('./objectcomponents/association.component');
var applyingteam_component_1 = require('./objectcomponents/applyingteam.component');
var teacherprofile_component_1 = require('./objectcomponents/teacherprofile.component');
var edicprofile_component_1 = require('./objectcomponents/edicprofile.component');
var associationprofile_component_1 = require('./objectcomponents/associationprofile.component');
var forum_component_1 = require('./forum/forum.component');
var forum_component_2 = require('./forum/forum.component');
var forum_component_3 = require('./forum/forum.component');
var component_1 = require('./formcreator/component');
var login_component_1 = require('./components/login.component');
var forum_component_4 = require('./forum/forum.component');
var home_component_1 = require('./pages/home.component');
var ownprofile_component_1 = require('./pages/ownprofile.component');
var profileview_component_1 = require('./pages/profileview.component');
var profilecreation_component_1 = require('./pages/profilecreation.component');
var communityblog_component_1 = require('./pages/communityblog.component');
var schoolblog_component_1 = require('./pages/schoolblog.component');
var auth_guard_1 = require('./auth.guard');
var drf_model_1 = require("./objectmodel/drf.model");
var schoolRoutes = new drf_model_1.DRFModelRouter("partners/school", schools_component_1.SchoolListComponent, schools_component_1.SchoolDetailComponent, schools_component_1.SchoolNewComponent, schools_component_1.SchoolEditComponent, auth_guard_1.AuthGuard).routes();
var edicRoutes = new drf_model_1.DRFModelRouter("partners/edic", edic_component_1.EdicListComponent, edic_component_1.EdicDetailComponent, edic_component_1.EdicNewComponent, edic_component_1.EdicEditComponent, auth_guard_1.AuthGuard).routes();
var associationRoutes = new drf_model_1.DRFModelRouter("partners/association", association_component_1.AssociationListComponent, association_component_1.AssociationDetailComponent, association_component_1.AssociationNewComponent, association_component_1.AssociationEditComponent, auth_guard_1.AuthGuard).routes();
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'signup', component: login_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'logout', component: login_component_1.LogoutComponent },
    { path: 'apply', component: applyingteam_component_1.ApplyingTeamNewComponent, canActivate: [auth_guard_1.AuthGuard] }
].concat(schoolRoutes, edicRoutes, associationRoutes, [
    { path: 'application/:id', component: applyingteam_component_1.ApplyingTeamDetailComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile', component: ownprofile_component_1.OwnProfileComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile/:id', component: profileview_component_1.ProfileViewComponent },
    { path: 'profile/create', component: profilecreation_component_1.ProfileCreationSelection, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile/create/teacher', component: teacherprofile_component_1.TeacherProfileNewComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile/create/edic', component: edicprofile_component_1.EdicProfileNewComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'profile/create/association', component: associationprofile_component_1.AssociationProfileNewComponent, canActivate: [auth_guard_1.AuthGuard] },
    //{ path: 'profile/create/student', component: SchoolNewComponent, canActivate: [AuthGuard] },
    { path: 'report/create', component: component_1.FormBuildercomponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'report/new', component: component_1.FormCompilercomponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'report/:id/new', component: component_1.FormCompilercomponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'report/:id/edit/:iid', component: component_1.FormCompilercomponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'forum', component: forum_component_4.ForumComponent, canActivate: [auth_guard_1.AuthGuard], children: [
            { path: '', component: forum_component_1.ForumChannelListComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: 'new', component: forum_component_1.ForumChannelNewComponent, canActivate: [auth_guard_1.AuthGuard] },
            { path: ':id', component: forum_component_1.ForumChannelDetailComponent, canActivate: [auth_guard_1.AuthGuard], children: [
                    { path: '', component: forum_component_2.ForumThreadListComponent, canActivate: [auth_guard_1.AuthGuard] },
                    { path: ':id', component: forum_component_2.ForumThreadDetailComponent, canActivate: [auth_guard_1.AuthGuard], children: [
                            { path: '', component: forum_component_3.ForumPostListComponent, canActivate: [auth_guard_1.AuthGuard] },
                            { path: 'new', component: forum_component_3.ForumPostNewComponent, canActivate: [auth_guard_1.AuthGuard] },
                        ] }
                ] }
        ] },
    { path: 'schoolblog', component: schoolblog_component_1.SchoolBlogComponent },
    { path: 'communityblog', component: communityblog_component_1.CommunityBlogComponent },
]);
console.log(routes);
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map