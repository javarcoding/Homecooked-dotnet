import { ROLES } from "../constants/roles";

export const getRedirectPathByRole = (role) => {
  switch (role) {
    case ROLES.CUSTOMER:
      return "/customer/dashboard";
    case ROLES.CHEF:
      return "/chef/dashboard";
    case ROLES.ADMIN:
      return "/admin/dashboard";
    case ROLES.DELIVERY:
      return "/delivery/dashboard";
    default:
      return "/";
  }
};
