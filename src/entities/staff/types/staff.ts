export interface StaffInfo {
  staffId: number;
  nameRu: string;
  nameEn: string;
  description: string;
  posterUrl: string;
  professionText: string;
  professionKey: StaffProfession;
}

export type StaffProfession =
  | 'DIRECTOR'
  | 'ACTOR'
  | 'PRODUCER'
  | 'WRITER'
  | 'OPERATOR'
  | 'COMPOSER'
  | 'DESIGN'
  | 'EDITOR'
  | 'TRANSLATOR'
  | 'VOICE_DIRECTOR';

export type StaffInfoList = StaffInfo[];
