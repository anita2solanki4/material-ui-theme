import React from 'react';
import Typography from 'material-ui/Typography';

export default function Types() {
  return (
    <div>
      <Typography type="display4" gutterBottom>
        Display 4
      </Typography>
      <Typography type="display3" gutterBottom>
        Display 3
      </Typography>
      <Typography type="display2" gutterBottom>
        Display 2
      </Typography>
      <Typography type="display1" gutterBottom>
        Display 1
      </Typography>
      <Typography type="headline" gutterBottom>
        Headline
      </Typography>
      <Typography type="title" gutterBottom>
        Title
      </Typography>
      <Typography type="subheading" gutterBottom>
        Subheading
      </Typography>
      <Typography type="body2" gutterBottom>
        Body 2
      </Typography>
      <Typography type="body1" gutterBottom>
        Body 1
      </Typography>
      <Typography type="caption" gutterBottom>
        Caption
      </Typography>
      <Typography gutterBottom>
        {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        `}
      </Typography>
    </div>
  );
}