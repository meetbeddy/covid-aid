import React from "react";
import { Modal, Form } from "react-bootstrap";

function WelcomeNote(props) {
  return (
    <Modal
      size="lg"
      show={props.showModal}
      onHide={props.handleShowModal}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="example-modal-sizes-title-lg"
          style={{ textAlign: "center" }}
        >
          WELCOME NOTE FROM THE PRESIDENT OF LION MULTI-PUPORSE COOPERATIVE
          SOCIETY NIGERIA LIMITED.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="card card-widget widget-user">
          <div
            className="widget-user-header bg-info"
            style={{ backgroundColor: "green" }}
          >
            <h3 className="widget-user-username">Stephen Ebialim Ndili</h3>
            <h5 className="widget-user-desc">
              M.Sc., B.Sc., HND, FCA, CPFA, MILRM
            </h5>
          </div>
          <div className="widget-user-image">
            <img
              className="img-circle elevation-2"
              src="../img/president_steve.jpg"
              alt="User Avatar"
            />
          </div>
          <div className="footer">
            Cooperative societies developed out of the effects of the industrial
            revolution of the 18th and 19th centuries. One of the
            characteristics of the industrial revolution era was poor
            remuneration and inadequate access to financial capital, which is
            currently a similar situation facing the average Nigerian worker
            today.
            <br />
            <br />
            As a result of the above, workers have little or no option than to
            find solution to address their poor income in order to accumulate
            capital that will enhance their wellbeing. Cooperative Societies are
            organized by people with similar background. Their main objective is
            usually to solve common problems and protect common interest.
            <br />
            <br />
            Again, it is very obvious that commercial loan sources have become
            inadequate in addressing the demand for money. These loan sources
            are characterized by high interest rate and other extraneous
            conditions which have made obtaining loans from conventional Banks
            and similar institutions stifling and unattractive.
            <br />
            <br />
            In addition, we have identified the crude method of financial record
            keeping by current operators of cooperative societies. Also observed
            by our team is the issue of difficulties and secrecy involved in
            ascertaining cooperators financial standings and the painful resolve
            by individual cooperators to physically visit their cooperative
            offices from time-to-time for insignificant enquiries. We have
            resolved these challenges by providing veritable online real-time
            services to our members and prospective members alike.
            <br />
            <br />
            Consequently, this project outlines our understanding and resolves
            to bridge the gap of persistent and acute financial needs of the
            University of Nigeria, Nsukka Staff and other interested government
            and organized private sector workers.
            <br />
            <br />
            The cooperative will be managed with cutting edge technology.
            Efforts are already in place to adequately manage the financial
            aspect of the system with a customized cloud based electronic
            accounting software and website (front-end interface) to assist
            cooperators easily access their financial status online-real-time.
            Our solution is interactive and user friendly with customized
            individual cooperators dashboard/profile giving them unfettered
            access to manage their savings, loans, shareholdings and many more.
            <br />
            <br />
            The Management team of Lion Multipurpose Cooperative Society Nigeria
            Limited has been carefully drawn from tested, proven and trusted
            professionals.
            <br />
            <br />
            It is on this backdrop that we have anchored our decision to assist
            the University, her Staff and Staff of similar structured
            organizations to provide a veritable platform that will enable our
            members and prospective cooperators secure short-term loan, buy
            articles, invest in real estate, agriculture and other commercial
            ventures that will benefit our members and other interested members
            of the public.
            <br />
            <br />
            Finally, we have concluded arrangements to charge minimal and fixed
            Interest rate to our members and other interested members of the
            public.
            <br />
            <br />
            After a deliberate and careful survey of the activities and
            operations of cooperative societies and other similar organizations
            offering financial services within and outside our environment, we
            are poised to offer the following unique services to our members and
            prospective members:
            <ul>
              <li>Online application and disbursement of loans</li>
              <li>
                Professional advisory services. Members who intend to seek
                investment loan and requires the services of the cooperative
                management for a token fee will be assisted with professional
                investment advice such as investment appraisal, feasibility
                study and other qualitative professional counsel.
              </li>
              <li>
                Management of cooperators funds with a customized cloud-based
                electronic accounting software.
              </li>
              <li>
                Maintenance of online-real-time services of each cooperators
                profile (including financials). This will be done through a
                front-end interface that will enable cooperators access to their
                profile in real time.
              </li>
              <li>
                We have provided a platform that will cushion the effect of
                members’ financial needs by issuing soft loans without
                collateral.
              </li>
              <li>
                We will provide loans and sell articles on non-fluctuating
                interest rates.
              </li>
              <li>
                Due to our resolve to operate a technology driven cooperative
                society, our services will be extended to other interested and
                Structured Public and Private Sector organizations with
                considerable limit to distance.
              </li>
            </ul>
            In consideration of the above, I humbly wish to invite you to click
            the signup/register menu on the topmost right hand corner of our
            website – www.lmcsnigltd.org.ng to commence a worthwhile journey
            with other family members of Lion Multi-Purpose Cooperative Society
            Nigeria Limited.
            <br />
            <br />
            We promise you a rewarding experience that will be characterized by
            ownership, transparency, integrity and accountability
            <br />
            <b>
              CONGRATULATIONS AND WELCOME TO LION MULTI-PURPOSE COOPERATIVE
              SOCIETY NIGERIA LIMITED!
            </b>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={(e) => {
              props.handleSetCookies(e);
            }}
            type="checkbox"
            label="Do not show this again"
          />
        </Form.Group>
      </Modal.Footer>
    </Modal>
  );
}

export default WelcomeNote;
