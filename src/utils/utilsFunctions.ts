interface NavigateToProfileProps {
  data: any;
  navigate: any;
  e : any
}

export const navigateToProfile = ({
  data,
  navigate,
  e
}: NavigateToProfileProps) => {
    e.preventDefault()
  if (data.user === null) {
    navigate("/signup");
  }else {
    navigate("/profile")
  }
};
