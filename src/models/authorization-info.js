export const authorizationInfoModel = (userInfo) => {
  const {
    avatar_url: avatarUrl,
    email,
    id,
    is_pro: isPro,
    name
  } = userInfo;

  return {
    avatarUrl,
    email,
    id,
    isPro,
    name
  };
};
