import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  invoiceGenerationDialog: {
    width: "100%",
    maxWidth: 400,
    padding: "15px 30px 35px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    marginBottom: 0,
  },
  closeButton: {
    borderRadius: "50%",
    width: 40,
    height: 40,
    padding: 0,
    minWidth: "auto",
  },
  fields: {
    [theme.breakpoints.up("sm")]: {
      padding: "0 15px",
    },
  },
  actionButtons: {
    width: "45%",
    maxWidth: 140,
  },
  note: {
    paddingBottom: 20,
  },
}));
