const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  itemDescription: {
    width: '100%'
  },
  shareButton: {
    boxShadow: 'none',
    marginTop: '20px'
  },
  shareFieldset: {
    border: 'none',
  },
  form: {
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '0'
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  itemName: {
    padding: '30px 0',
    width: '100%'
  },
  heading: {
    fontFamily: 'helvetica',
    marginBottom: '20px',
    fontSize: '50px'
  },
  shareImage: {
    width: '100%'
  }
});

export default styles;