import React, { useState } from "react";
import { Button } from "../../components/Button";
import Axios from "axios";

const ButtonContainer = () => {
  const [size, setSize] = useState("default");
  const [testLink, settestLink] = useState("");

  const onChangeSize = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.value);
    setSize(e.currentTarget.value);
  };

  const ioslongDyanmic = {
    longDynamicLink:
      "https://qf58u.app.goo.gl/?link=https://zealous-mcnulty-859ab2.netlify.app&isi=1223932558&ibi=com.kinemaster.app&imv=5.0.3&st=KineMaster Project - Pixel!&&si=https://test-cdn-project-feed.kinemasters.com/projects/605013525f9ba402d0c6d79d/1pos1VtS9t9N5mQKeWqjdriKFFn.jpg&efr=1",
    suffix: {
      option: "SHORT",
    },
  };
  const andlongDyanmic = {
    longDynamicLink:
      "https://qf58u.app.goo.gl/?link=https://kinemaster.com/projectfeed/605019355f9ba402d0c6d7b3&apn=com.nexstreaming.app.kinemasterfree&amv=20940&st=키네마스터테스트&sd=설명글입니다&si=https://zealous-mcnulty-859ab2.netlify.app/src/600x600.jpg",
    suffix: {
      option: "SHORT",
    },
  };

  const allDynamic = {
    longDynamicLink:
      "https://zealous-mcnulty-859ab2.netlify.app/?link=https://kinemaster.com/projectfeed/605013525f9ba402d0c6d79d&apn=com.nexstreaming.app.kinemasterfree&amv=20940&amv=20940&isi=1223932558&ibi=com.kinemaster.app&ofl=&st=KineMaster Project - Pixel!&&si=https://test-cdn-project-feed.kinemasters.com/projects/605013525f9ba402d0c6d79d/1pos1VtS9t9N5mQKeWqjdriKFFn.jpg",
    suffix: {
      option: "SHORT",
    },
  };
  //
  /* 
  예상되는 동작: 

  */
  const parmeterDynamic = {
    dynamicLinkInfo: {
      domainUriPrefix: "https://qf58u.app.goo.gl",
      link: "https://kinemaster.com/projectfeed/605013525f9ba402d0c6d79d",
      androidInfo: {
        androidPackageName: "com.nexstreaming.app.kinemasterfree",
        // "androidFallbackLink": 20940,
        // androidMinPackageVersionCode: "string",
      },
      iosInfo: {
        iosBundleId: "com.kinemaster.app",
        // iosAppStoreId: "1223932558",
      },
    },
    // suffix: {
    //   option: "SHORT",
    // },
  };

  const onDynamic = (e) => {
    e.preventDefault();
    Axios.post(
      "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=",
      parmeterDynamic
    ).then((res) => {
      settestLink(res.data.shortLink);
      // window.location.href = res.data.shortLink
    });
  };

  return (
    <div>
      <h1>Button</h1>
      <div>
        <h2>change size</h2>
        <Button value="large" onClick={(e) => onChangeSize(e)}>
          large
        </Button>
        <Button value="default" onClick={(e) => onChangeSize(e)}>
          default
        </Button>
        <Button value="small" onClick={(e) => onChangeSize(e)}>
          small
        </Button>
      </div>
      <a href={testLink}>click</a>
      <Button primary size={size} onClick={(e) => onDynamic(e)}>
        다이나믹 링크
      </Button>
      <Button type="dashed" size={size}>
        dashed
      </Button>
      <Button type="text" size={size}>
        text
      </Button>
      <Button type="link" size={size}>
        link
      </Button>
      <Button danger size={size}>
        danger
      </Button>
      <Button primary shape="circle" size={size}>
        primary
      </Button>
      <Button primary shape="round" size={size}>
        primary
      </Button>
    </div>
  );
};

export default ButtonContainer;
