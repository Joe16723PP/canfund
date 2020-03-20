export interface CreateIdeaModel {
  tags: string[];
  project_name: string;
  description: string;
  photoURL: string;
  owner_id: string;
  funding_target: number;
  location: string;
}


export interface IdeaDetailModel {
  funding_log: any[];
  project_name: string;
  status: string;
  owner_id: string;
  create_on: any;
  photoURL: string;
  tags: string[];
  like: any[];
  location: string;
  funding_target: number;
  description: string;
  project_id: string;
}
