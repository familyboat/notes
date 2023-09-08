import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { HomePath, NotesPath, SettingsPath } from "../constant";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { useNavigate } from "../hook";

enum Path {
  home = HomePath,
  notes = NotesPath,
  settings = SettingsPath,
}

export default function NavMenu() {
  const location = useLocation();
  const [path, setPath] = useState<Path>(location.pathname as Path);
  const navigate = useNavigate();
  const intl = useIntl();

  return (
    <>
      <Box
        sx={{
          flex: "1 1 0",
          overflow: "hidden auto",
          height: "100%",
        }}
      >
        <Outlet />
      </Box>
      <BottomNavigation
        showLabels
        value={path}
        onChange={(_, newPath) => {
          setPath(newPath);
          navigate(newPath);
        }}
      >
        <BottomNavigationAction
          value={Path.home}
          label={intl.formatMessage({
            id: "home",
            defaultMessage: "home",
          })}
        />
        <BottomNavigationAction
          value={Path.notes}
          label={intl.formatMessage({
            id: "notes",
            defaultMessage: "notes",
          })}
        />
        <BottomNavigationAction
          value={Path.settings}
          label={intl.formatMessage({
            id: "settings",
            defaultMessage: "settings",
          })}
        />
      </BottomNavigation>
    </>
  );
}
