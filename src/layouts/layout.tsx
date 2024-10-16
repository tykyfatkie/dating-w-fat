import Background from "./background/background";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <>
      {/* <div className="main d-flex justify-content-center align-items-center">
        <div className="gradient" />
        <main>{children}</main>
      </div> */}
      <div className="layout-container">
        <Background />

        <div className="main-content d-flex justify-content-center align-items-center">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
