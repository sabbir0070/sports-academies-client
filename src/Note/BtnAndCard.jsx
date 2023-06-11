 <div className='card-actions'>
          {isAdmin || isInstructor || seats == 0 ? (
            <>
              <button
                disabled
                onClick={() => handleSelect(singleClass)}
                className='btn bg-[#dd5449] hover:bg-[#b31409] hover:text-white border-0'
              >
                Select Classes
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleSelect(singleClass)}
                className='btn bg-[#dd5449] hover:bg-[#b31409] hover:text-white border-0'
              >
                Select Classes
              </button>
            </>
          )}
        </div>