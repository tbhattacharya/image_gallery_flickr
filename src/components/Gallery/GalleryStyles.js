export const styles = {
  root: {
    flexGrow: 1,
  },
  mainConatiner: {
    padding: '25px 80px'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: '50px',
    color: 'wheat'
  },
  overlayItem: {
    display: 'none',
    color: 'wheat',
    textAlign: 'center',
    'flex-direction': 'column',
    'justify-content': 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'black',
    opacity: '0.7',
    'z-index': '2',
    transition: '.5s ease',
    top: '0',
    left: '0'
  },
  thumbnail: {
    position: 'relative',
    '&:hover $overlayItem': {
      display: 'flex'
    }
  },
  photo:{
    padding: '5px',
    backgroundColor: 'antiquewhite'
  }
};