import { faGoogle, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBell, faEye } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faCalendar, faUser, faSignOutAlt, faSchool, faTasks, faMapMarker, faRegistered, faTools, faSpinner, faFileExport } from '@fortawesome/free-solid-svg-icons';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  search=faSearch
  calendar=faCalendar
  bell=faBell
  google=faGoogle
  facebook=faFacebook
  github=faGithub
  linkedin=faLinkedin
  account=faUser
  signOut=faSignOutAlt
  classroom=faSchool
  tasks=faTasks
  location=faMapMarker
  reservation=faRegistered
  tools=faTools
  spinner=faSpinner
  eye=faEye
  export=faFileExport

  constructor() { }

}
