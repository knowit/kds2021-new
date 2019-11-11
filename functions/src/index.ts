import * as functions from 'firebase-functions';
import * as ScheduleController from './scheduleController';
import * as TalkController from './talkController';
import * as UserController from './userController';
import * as TagController from './tagController';
import * as ProgramController from './programController';


export const updateSchedule = functions.region('europe-west1').https.onCall(ScheduleController.updateSchedule);

export const addTalk = functions.region('europe-west1').https.onCall(TalkController.addTalk);

export const updateTalk = functions.region('europe-west1').https.onCall(TalkController.updateTalk);

export const addUser = functions.region('europe-west1').https.onCall(UserController.addUser);

export const addTag = functions.region('europe-west1').https.onCall(TagController.addTag);

export const createProgram = functions.region('europe-west1').https.onCall(ProgramController.createProgram);

export const setActiveProgram = functions.region('europe-west1').https.onCall(ProgramController.setActiveProgram);