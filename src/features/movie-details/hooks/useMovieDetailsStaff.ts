import type { StaffInfoList } from '@/entities/staff/types';

const LIMIT_TO_SHOW = 3;

export const useMovieDetailsStaff = (staff?: StaffInfoList) => {
  const slicedStaff = staff?.slice(0, LIMIT_TO_SHOW) ?? [];
  const staffLength = staff?.length ?? 0;
  const slicedStaffLength = slicedStaff.length;

  const commaRenderCondition = (index: number) => {
    return (
      index !== slicedStaffLength &&
      index !== staffLength - 1 &&
      slicedStaffLength > 1
    );
  };

  const linkMoreInfoCondition =
    slicedStaffLength > 1 && staffLength > LIMIT_TO_SHOW;

  return {
    slicedStaff,
    commaRenderCondition,
    linkMoreInfoCondition,
  };
};
