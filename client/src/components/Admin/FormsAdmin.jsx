import React from 'react';
import Topbar from './Topbar';
import GaugeVisualization from './GaugeVisualizer';
import FormTable from './FormTable';
import CountBox from './CountBox';

function FormsAdmin({ selectedLink, data, handleViewData, onRefresh }) {
  const formData = data?.data?.forms || {};

  const guageTestData = [
    { name: "Hair", value: data?.data?.totalHairForms, color: "#926FB0" },
    { name: "Skin", value: data?.data?.totalSkinForms, color: "#564375" },
  ];

  return (
    <>
      {selectedLink === "forms" && (
        <>
          <Topbar title={'Forms'} />
          <div className="w-full flex justify-center overflow-hidden">
            <div className="w-full flex flex-wrap flex-row justify-center lg:justify-start gap-10 lg:gap-20 xl:space-x-6 items-center  xl:space-y-0 mt-6 py-6">
              <CountBox data={formData} title='Forms Today' hiddenBtn={true} countEntity='length' />

              <div className="h-[250px] w-[250px] lg:w-[180px] lg:h-[200px] xl:w-[250px] xl:h-[250px]   px-5 flex items-center justify-center">
                <GaugeVisualization data={guageTestData} />
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl overflow-x-auto mx-auto">
            <FormTable
              data={formData}
              handleViewData={handleViewData}
              onStatusUpdate={onRefresh}
            />
          </div>
        </>
      )}
    </>
  );
}

export default FormsAdmin;