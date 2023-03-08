import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../assets/svg/BackArrowIcon";
import VoteModal from "./Modals/VoteModal";

function Vote() {
  const [voteCategory, setVoteCategory] = useState(null);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const existingCandidatesMap = {};
  voteCategory?.forEach((candidate, candidateIndex) => {
    if (!!existingCandidatesMap[candidate.role])
      existingCandidatesMap[candidate.role].push(candidate);
    else existingCandidatesMap[candidate.role] = [candidate];
  });

  useEffect(() => {
    axios
      .get("/election/candidate")
      .then(function (response) {
        console.log(response);
        setVoteCategory(response.data.existingCandidates);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleVote = () => {
    axios
      .post(
        `/election/candidate/vote?candidateId=${
          !!selectedCandidate ? selectedCandidate._id : ""
        }`
      )
      .then(function (response) {
        alert(response.data.message);
        setVoteCategory(response.data.existingCandidates);
        // console.log("response1", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <div className="mt-3 mb-4 " onClick={() => navigate(-1)}>
        <div className="">
          <div className="d-flex align-items-center gap-2 cursor-pointer">
            <BackArrowIcon /> <span>Voting System</span>
          </div>
        </div>
      </div>

      <div className="page-btn-white text-center p-2 m-2 mx-4">
        View Candidates and Positoions
      </div>
      <p className="mt-2 text-center">Click on category to cast vote</p>

      {Object.keys(existingCandidatesMap).map(
        (currentCategory, currentCategoryIndex) => {
          return (
            <div
              className=" mt-2"
              onClick={() => {
                setCurrentCategory({
                  type: currentCategory,
                  candidates: existingCandidatesMap[currentCategory],
                });

                setModalShow(true);
              }}
              key={currentCategoryIndex}
            >
              <strong>{currentCategory}</strong>

              <div className="vote-badge p-3">
                <ul className=" list-unstyled ">
                  {existingCandidatesMap[currentCategory].map(
                    (currentCandidate, currentCandidateIndex) => {
                      return (
                        <li key={currentCandidateIndex}>
                          {currentCandidate.name}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          );
        }
      )}

      <VoteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        category={currentCategory}
        selectedcandidate={selectedCandidate}
        setselectedcandidate={setSelectedCandidate}
        handlevote={handleVote}
      />
    </div>
  );
}

export default Vote;
