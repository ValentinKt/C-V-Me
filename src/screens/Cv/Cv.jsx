import React from "react";
import { ComponentImg } from "../../components/ComponentImg";
import { ComponentNameJob } from "../../components/ComponentNameJob";
import { ComponentTitle } from "../../components/ComponentTitle";
import { ComponontDataList } from "../../components/ComponontDataList";
import { Date } from "../../components/Date";
import { IconShield1 } from "../../icons/IconShield1";
import { IconSwords } from "../../icons/IconSwords";
import { LogoAbstract } from "../../icons/LogoAbstract";
import { LogoAftereffects } from "../../icons/LogoAftereffects";
import { LogoFigma1 } from "../../icons/LogoFigma1";
import { LogoIllustrator } from "../../icons/LogoIllustrator";
import { LogoIndesign } from "../../icons/LogoIndesign";
import { LogoInvision } from "../../icons/LogoInvision";
import { LogoJira1 } from "../../icons/LogoJira1";
import { LogoMagento } from "../../icons/LogoMagento";
import { LogoPremiere1 } from "../../icons/LogoPremiere1";
import { LogoPrinciple } from "../../icons/LogoPrinciple";
import { LogoProtopie } from "../../icons/LogoProtopie";
import { LogoSalesforce1 } from "../../icons/LogoSalesforce1";
import { LogoSketch } from "../../icons/LogoSketch";
import { LogoSlack } from "../../icons/LogoSlack";
import { LogoXd1 } from "../../icons/LogoXd1";
import { LogoZeplin1 } from "../../icons/LogoZeplin1";
import "./style.css";

export const Cv = () => {
  return (
    <div className="CV">
      <div className="div-2">
        <ComponentImg
          className="design-component-instance-node"
          rectangleClassName="design-component-instance-node-2"
        />
        <div className="frame-3">
          <ComponentNameJob
            className="design-component-instance-node-3"
            divClassName="design-component-instance-node-4"
            divClassName1="design-component-instance-node-5"
            divClassNameOverride="component-name-job-instance"
            rectangleClassName="design-component-instance-node-2"
          />
          <p className="sed-ut-perspiciatis">
            &#34;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
            rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
            <br />
            <br />
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            <br />
            <br />
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
          </p>
        </div>
        <div className="overlap">
          <div className="overlap-2">
            <div className="frame-4">
              <div className="div-3">
                <ComponentTitle
                  divClassName="design-component-instance-node-5"
                  rectangleClassName="design-component-instance-node-2"
                  type="primary"
                />
                <div className="content-2">
                  <img className="line" alt="Line" src="/img/line.svg" />
                  <div className="div-3">
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-4"
                      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                      type="bullets"
                    />
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-4"
                      text={
                        <>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          <br />
                          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                          voluptatum deleniti <br />
                          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                        </>
                      }
                      type="bullets"
                    />
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      divClassName1="design-component-instance-node-5"
                      divClassNameOverride="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-4"
                      text={
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit
                          <br />
                          Excepteur sint occaecat cupidatat non proident
                          <br />
                          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        </>
                      }
                      type="bullets"
                    />
                  </div>
                </div>
              </div>
              <div className="div-3">
                <ComponentTitle
                  divClassName="design-component-instance-node-5"
                  rectangleClassName="design-component-instance-node-2"
                  type="primary"
                />
                <div className="content-2">
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="div-3">
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-5"
                      type="default"
                    />
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-5"
                      text1="Sed ut perspiciatis unde omnis iste natus"
                      type="default"
                    />
                    <ComponontDataList
                      className="design-component-instance-node-3"
                      divClassName="design-component-instance-node-4"
                      frameClassName="design-component-instance-node-4"
                      groupClassName="componont-data-list-instance"
                      loremIpsumDolorClassName="design-component-instance-node-5"
                      text1="Et harum quidem rerum facilis"
                      type="default"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-5" />
            <div className="group-5">
              <div className="frame-5">
                <ComponentTitle
                  className="design-component-instance-node-3"
                  divClassNameOverride="design-component-instance-node-5"
                  icon={<IconSwords className="icon-instance-node" />}
                  rectangleClassName="component-title-instance"
                  rectangleClassNameOverride="design-component-instance-node-2"
                  text="TOOLS"
                  type="secondary"
                />
                <div className="frame-6">
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE PHOTOSHOP"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoIllustrator className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE ILLUStrator"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoIndesign className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE INDESIGN"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoAftereffects className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE AFTER EFFECTS"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoPremiere1 className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE Premiere"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoXd1 className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ADOBE XD"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoFigma1 className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="Figma"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoSketch className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="Sketch"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoZeplin1 className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ZEPLIN"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoInvision className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="INVISION"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoAbstract className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="Abstract"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoPrinciple className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="Principle"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoProtopie className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="PROTOPIE"
                  />
                </div>
              </div>
              <div className="frame-7">
                <ComponentTitle
                  className="design-component-instance-node-3"
                  divClassNameOverride="design-component-instance-node-5"
                  icon={<IconShield1 className="icon-instance-node" />}
                  rectangleClassName="component-title-2"
                  rectangleClassNameOverride="design-component-instance-node-2"
                  text="OTHER TOOLS"
                  type="secondary"
                />
                <div className="group-6">
                  <Date
                    backLineClassName="date-instance"
                    className="design-component-instance-node"
                    divClassName="date-2"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoMagento className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="MAGENTO / ADOBE COMmERCE"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="date-3"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoSalesforce1 className="icon-instance-node" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="SALESFORCE CC - SFRA"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="date-4"
                    divClassName="date-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoJira1 className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="ATLASSIAN JIRA / COnfluencE"
                  />
                  <Date
                    backLineClassName="date-instance"
                    className="date-6"
                    divClassName="design-component-instance-node-5"
                    dotClassName="design-component-instance-node-2"
                    icon={<LogoSlack className="icon-instance-node" color="#C6B200" />}
                    percent="fifty"
                    progressLineClassName="design-component-instance-node-2"
                    text="slack"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-3">
              <div className="rectangle-6" />
              <p className="element">
                <span className="span">1</span>
                <span className="text-wrapper-6">/2</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
