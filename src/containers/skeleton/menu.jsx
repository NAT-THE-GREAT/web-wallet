import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, withRouter } from "react-router-dom";

// UTILS
import i18n from "../../utils/i18n";

// REDUX
import { connect } from "react-redux";

// MATERIAL UI
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";

// STYLE
import style from "./style.css";

// array itens menu
const menuItens = [
  {
    link: "/home",
    label: "Home",
    icon: "../../images/icons/home/home@1x.png"
  },
  {
    link: "/wallet",
    label: "Wallet",
    icon: "../../images/icons/wallet/wallet@1x.png"
  }
];

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMenu = () => {
    let { pathname } = this.props.location;
    const { actionMenu } = this.props;

    return menuItens.map((item, key) => {
      let classStyle = style.linkMenu;

      if (item.label === "Home" && (pathname === "/" || pathname === "/home")) {
        classStyle = style.linkMenu + " " + style.linkMenuActive;
      }

      return (
        <NavLink
          className={classStyle}
          activeClassName={style.linkMenuActive}
          to={item.link}
          key={key}
          onClick={actionMenu}
        >
          <img src={item.icon} className={style.iconMenu} />
          {item.label}
        </NavLink>
      );
    });
  };

  render() {
    const { openMenu, user, actionLogout } = this.props;

    return (
      <div
        className={style.colMenu}
        style={{ left: +openMenu ? " 0px " : "-232px" }}
      >
        <Hidden lgUp>
          <Grid container className={style.boxUserMenu}>
            <Grid item xs={4} align="center">
              <Avatar
                alt="Avatar"
                src="images/icons/lunio/lunio-user@100x100.jpg"
              />
            </Grid>
            <Grid item xs={8}>
              <span className={style.userName}>{user.name}</span>
              <br />
              <Link to="/config" className={style.link}>
                {i18n.t("MENU_CONFIGURATION")}
              </Link>
              <Link to="/help" className={style.link}>
                {i18n.t("MENU_SUPPORT")}
              </Link>
              <Link to="/" onClick={actionLogout} className={style.link}>
                {i18n.t("MENU_LOGOUT")}
              </Link>
            </Grid>
          </Grid>
        </Hidden>
        {this.renderMenu()}
      </div>
    );
  }
}

Menu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  actionMenu: PropTypes.func.isRequired,
  actionLogout: PropTypes.func.isRequired,
  user: PropTypes.object
};

const mapSateToProps = store => ({
  user: store.user.user
});

export default connect(
  mapSateToProps,
  null
)(withRouter(Menu));
