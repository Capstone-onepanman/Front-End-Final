import ProblemConfig from './game/problem/ProblemConfig';
import BattleConfig from './game/battle/BattleConfig';
import ReplayConfig from './game/Replay/ReplayConfig';
import ViewProblemConfig from './game/viewProblem/ViewProblemConfig';
import ViewReplayConfig from './game/viewReplay/ViewReplayConfig';
import MatchingIdx1Config from './game/matching1/MatchingIdx1Config';
import MatchingIdx2Config from './game/matching2/MatchingIdx2Config';
// import CalendarAppConfig from './calendar/CalendarAppConfig';
import ChatAppConfig from './chat/ChatAppConfig';
// import ContactsAppConfig from './contacts/ContactsAppConfig';
import AnalyticsDashboardAppConfig from './home/AnalyticsDashboardAppConfig';
// import ProjectDashboardAppConfig from './home/project/ProjectDashboardAppConfig';
// import ECommerceAppConfig from './e-commerce/ECommerceAppConfig';
// // import FileManagerAppConfig from './file-manager/FileManagerAppConfig';
// import MailAppConfig from './mail/MailAppConfig';
import NotesAppConfig from './community/NotesAppConfig';
// import ScrumboardAppConfig from './scrumboard/ScrumboardAppConfig';
// import TodoAppConfig from './todo/TodoAppConfig';


const appsConfigs = [
	AnalyticsDashboardAppConfig,
	// ProjectDashboardAppConfig,
	// MailAppConfig,
	MatchingIdx1Config,
	MatchingIdx2Config,
	// TodoAppConfig,
	// ContactsAppConfig,
	// CalendarAppConfig,
	ChatAppConfig,
	// ECommerceAppConfig,
	// ScrumboardAppConfig,
	ViewProblemConfig,
	ViewReplayConfig,
	ReplayConfig,
	ProblemConfig,
	BattleConfig,
	NotesAppConfig
];

export default appsConfigs;
